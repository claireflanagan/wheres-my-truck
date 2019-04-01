const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.inviteUser = functions.firestore.document('users/{id}').onCreate(async(snap, context) => {
  const { email } = snap.data();

  const users = await admin.firestore().collection('users').where('email', '==', email).get();
  if(users.docs.length > 1) {
    return admin.firestore().collection('users').doc(context.params.id).delete();
  }

  await admin.auth().createUser({
    email: email
  });

  console.log(await admin.auth().generatePasswordResetLink(email));

  return null;
});
