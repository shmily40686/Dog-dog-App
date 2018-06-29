export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const CHANGE_LOGINBOX = 'CHANGE_LOGINBOX';

export const changeLocation = function (location) {
	return {
		type: CHANGE_LOCATION,
		location: location

	}
}

export const changeLogInBox = function (boolean) {
	return {
		type: CHANGE_LOGINBOX,
		logInBox: boolean

	}
}