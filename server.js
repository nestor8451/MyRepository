var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Users'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Albums'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Artist'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Playlist'); // Create a table for 'Users' with default settings
mobileApp.tables.add('PlaylistSongs'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Reviews'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Songs'); // Create a table for 'Users' with default settings
mobileApp.tables.add('NewSongs'); // Create a table for 'Users' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
