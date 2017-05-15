module.exports = {
	// General
	port : 3000,
	// Logs
	writeLogs : false,
	// Auth
	locationAuthentication : {
		locationId : "",
		locationName : "",
		user : {},
		accessToken : ""
	},
	// Config for Mijn SpraakNaarTekst, i.e. the central server
	centralServerConfig : {
        useMocks : false,
		host : "mijn.spraaknaartekst.eu",
    	port : 80
	}
}