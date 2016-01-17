var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    getProfiles: function (req, res, next) {
        var currentUser = req.session.currententUser;
        var userProfiles = [];
        for (var i = 0; i < currentUser.friends.length; i++) {
            var currentFriend = currentUser.friends[i];
            for (var j = 0; j < profiles.length; j++) {
                var currentProfile = profiles[j];
                if (currentFriend === currentProfile.name) {
                    userProfiles.push(currentProfile);
                }
            }
        }
    }
};