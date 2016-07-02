/**
 * Created by lexfaraday on 2/07/2016.
 */

import { Subscriptors } from '../imports/api/Subscriptors.js';

Meteor.methods({
    subscribeMe: function (from) {

        this.unblock();

        Subscriptors.insert({_id: from});

    }
});
