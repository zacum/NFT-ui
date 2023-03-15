import Moralis from 'moralis';

const serverUrl = 'https://sg2o7rhpognq.usemoralis.com:2053/server';
const appId = 'KZBokkkRUmXO7IUiPEsyNtTeRR25AOL6aBZXJZPN';
Moralis.start({ serverUrl, appId });

export async function loginWallet() {
	console.log('loginWallet');
	let user = Moralis.User.current();

	if (!user) {
		user = await Moralis.authenticate();
		console.log(`llego al authenticate`);
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		}
	}
	console.log(`llego al return `);

	return user;
}

export async function logOutWallet() {
	await Moralis.User.logOut();
	console.log('logged out');
	localStorage.removeItem('user');
}


