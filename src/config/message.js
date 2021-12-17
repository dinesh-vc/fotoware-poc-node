module.exports = {

    admin: {
        errorMessage: {
            Password: 'Please enter valid password',
            Email: 'Please enter valid email OR password',
            activeAccount: 'Please activate your account first'
        },
        infoMessage: {
            login: 'Login sucessfully',
        }
    },

    contact: {
        errorMessage: {
            alreadyExist: 'Contact already exists',
            dataNotFound: 'Contact data not found',
            invited: 'contact already invited',

        },
        infoMessage: {
            created: 'Contact created successfully',
            getDetails: 'Contact details get successfully',
            updateData: 'Contact updated successfully',
            deleteData: 'Contact deleted successfully'
        }
    },

    country: {
        infoMessage: {
            getDetails: 'Country details get successfully',
        }
    },

    event: {
        infoMessage: {
            reJoin: 'Successfully re-join event',
            created: 'Event created successfully',
            getDetails: 'Event details get successfully',
            updateData: 'Event updated successfully',
            deleteData: 'Event deleted successfully',
            join: 'Successfully joined event',
            leaveEvent: "Thank you for attending this event.",
            verifyPin: "Event Pin verified successfully",
            roomCreated: "Meeting Room created Successfully",
            attendersGetInfo: "Attended Info Get Successfully",
            endMeeting: "Meeting End Successfully"
        },
        errorMessage: {
            beforeORafter: 'Sorry, this event not started yet OR was finished',
            finished: 'Sorry, this event was finished .',
            notFound: 'Event not found',
            subscription: "You have not subscribed for this event",
            verifyPin: "Please enter valid pin to join this event",
            attenderNotFound: "Attendee not Found"
        }
    },

    eventSubscriber: {
        infoMessage: {
            created: 'event_subscriber created successfully',
            getDetails: 'event_subscriber details get successfully',
            updateData: 'event_subscriber updated successfully',
            deleteData: 'event_subscriber deleted successfully'
        },
        errorMessage: {
            notFound: "Event Subscribe User Details not found",
            alreadyExist: "Event subscriber already exists",
            eventSubLimit: 'Event subscriber limit out of bound'
        }
    },

    content: {
        infoMessage: {
            created: 'Content created successfully',
            getDetails: 'Content details get successfully',
            updateData: 'Content updated successfully',
            deleteData: 'Content deleted successfully'
        }
    },

    organization: {
        infoMessage: {
            created: 'Organization created successfully',
            getDetails: 'Organization details get successfully',
            updateData: 'Organization updated successfully',
            deleteData: 'Organization deleted successfully',
            registered: 'You have Successfully Registered'
        },
        errorMessage: {
            dataNotFound: "Organization Data Not Found",
            userExist: 'Organization User already exists',
            userInvited: 'Organization User already invited',

        }
    },

    platform: {
        infoMessage: {
            getDetails: 'Platform details get successfully',
        }
    },

    space: {
        infoMessage: {
            created: 'Space created successfully',
            getDetails: 'Space details get successfully',
            updateData: 'Space updated successfully',
            deleteData: 'Space deleted successfully'
        }
    },

    spaceType: {
        infoMessage: {
            created: 'SpaceType created successfully',
            getDetails: 'SpaceType details get successfully',
            updateData: 'SpaceType updated successfully',
            deleteData: 'SpaceType deleted successfully'
        }
    },

    user: {
        infoMessage: {
            getDetails: 'Profile get successfully',
            updateData: 'Your profile updated successfully',
            created: 'Your account created successfully',
            activated: 'Your account is activated successfully',
            passUpdate: 'Your password updated successfully'
        },
        errorMessage: {
            login: 'Please Enter valid email and password',
            Password: 'Please enter valid password',
            Email: 'Please enter valid email',
            activeAccount: 'Please activate your account first',
            alreadyExist: 'User already exists',
            currentPassword: 'Please enter valid old password',
            notFound: 'User not found',
            accountExistsButNotActivated: 'User already exists But not activate account'
        }
    },


    errorMessage: {
        genericError: 'Something went wrong, please try again.',
        adminNotFound: 'Please enter valid email and password',
        adminAlreadyExits: 'Admin already exits',
        emailNotFound: "Enter email not found",
        tokenNotFound: 'Token expire or not found',
        alreadyExist: 'Data already exist',
        categorylinkWithFile: 'Category link with files',
        dataNotFound: "Data Not Found",
        forbidden: "Resource Forbidden",
        attendeeNotInMeeting: 'Attendee Not Live in Session Meeting',
        BadRequest: 'Bad Request'
    },

    infoMessage: {
        login: 'Login successfully',
        deleteData: 'Delete Successfully',
        created: 'Data created successfully',
        forgotPassword: "Forgot-password successfully",
        resetPassword: "Reset password successfully",
        getDetails: 'Get details successfully',
        updateData: 'Update data successfully',
        attendeeLeave: 'Attendee Leave Session Metting successfully'

    },

    emails: {

        forgotPassword: {
            subject: '[Focal] Password Reset',
            body: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n %s/reset-password/%s \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n Thanks Focal team \n'
        },
        userRegisteredButSaveAsOrg: {
            subject: '[Focal] Invite For Organization',
            body: 'Hello ,\nAdmin invite to you for organization account.\nPlease click on the below link for configure your account.\nLink - %s/pagename?userId=%s .\n Thanks Focal team \n'

        },
        userRegisteredButSaveAsContact: {
            subject: '[Focal] Invite For Contact user',
            body: 'Hello ,\nThanks so much for joining Focal . Click here to login - %s/login \n Thanks Focal team \n'

        },

        inviteOrg: {
            subject: '[Focal] Invite For Organization',
            body: 'Hello ,\nAdmin invite to you for organization account.\nPlease click on the below link for configure your account.\nLink - %s/active/%s .\n Thanks Focal team \n'

        },

        inviteContact: {
            subject: '[Focal] Invite For Contact user',
            body: 'Hello ,\nAdmin invite to you for organization user account.\nPlease click on the below link for configure your account.\nLink - %s/active/%s .\n Thanks Focal team \n'

        },

        resetPassword: {
            subject: '[Focal] Your password has been changed',
            body: 'Hello,\n\n This is a confirmation that the password for your account %s has just been changed.\n Thanks Focal team \n'
        },
        passwordConfigure: {
            subject: '[Focal] Welcome To Spectator',
            body: 'Hi %s,\nThanks so much for joining Spectator. Click here to configure your password - %s/reset-password/%s \n Thanks Focal team \n'
        },
        signup: {
            subject: '[Focal] Please verify your email address',
            body: 'Hi %s,\nThanks so much for joining Spectator! To finish signing up, you just have to confirm that we got your email right. Click here to verify your email address - %s/email/auth/verify/%s \n Thanks Focal team \n'
        },
        verifyUser: {
            subject: '[Focal] Welcome To Focal',
            body: 'Hi %s,\nThanks so much for joining Focal. Click here to login - %s/login \n Thanks Focal team \n'
        },
        eventMailSentToUser: {

            subject: '[Focal] New Event Creation ',
            body: 'Hi %s,\nPlease Check Your Account.\nOrganization created a Event.\nEvent Pin is :- %s .\nPlease click on the link for more information %s/event-preview/%s/%s.\nThanks Focal team\n'

        },
        createUser: {
            subject: '[Focal] Account creation',
            body: 'Hi %s,\nThanks so much for joining Focal! Your creditials for login  is \nemail :-  %s \npassword :- %s \nClick here to login - %s/login \nThanks Focal team \n'
        },
        userPasswordUpdation: {
            subject: '[Bollettini Notarili] password updation',
            body: 'Hi %s,\nThanks so much for joining Bollettini Notarili! Your creditials for login  is email :-  %s and password :- %s. Click here to login - %s/login \n Thanks Bollettini Notarili team \n'
        },
        adminPasswordUpdation: {
            subject: '[Bollettini Notarili] password updation',
            body: 'Hi %s,\n Your creditials for login  is email :-  %s and password :- %s. Click here to login - %s/login \n Thanks Bollettini Notarili team \n'
        }
    }
}