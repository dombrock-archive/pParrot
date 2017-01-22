#About pParrot
pParrot is an open source secure messaging platform. It works but first entering a message and password into the database. Once the message has been entered and saved it will respond by giving you a "Public Key" for your post. You will need to find a secure way to communicate the message password to the recipient. I suggest a face to face conversation. 

Then you will send your public key to the recipient.  They will use the key along with the password to retrieve the message from the database. Once the message has been retrieved from the database it will be destroyed. However, it will otherwise stay in the database indefinitely, until it is read and thusly deleted. 

Due to the length and random nature of the public keys, it will be very difficult to "brute force" your way into discovering notes. To increase security, use a longer key length. You can change the key length by altering the third (numerical) value on the "write" menu. 

Even if someone were to discover your conversation filled with random numerical strings, and even if they interrogated the password(s) out of you there would be no reasonable way to retrieve the messages that have already been transmitted. You may also be alerted to some kind of message interception if the messages are no longer available to the intended recipient, even though they are using accurate credentials. 

Also, since the key is not a form of encryption and does not contain your message in any way shape or form, the key contains no useful information. Once it has been used there is no way to retrieve the message without access to the specific software and database installation that the message was saved on. 

Passwords are thoroughly salted and hashed using the latest techniques available. However, I suggest using some kind of third party encryption software before saving your messages into the database. This will add an extra layer of security and will avoid saving your messages in plain text while they are waiting to be read. I also suggest using this tool over proxies or the TOR network since the server may still be keeping IP addresses in the access log.



    "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them."

- Henry David Thoreau, Walden

##Usage

Install by cloning the repo.

Make sure that the owner of the files is www-data.

You can ensure this by running ````sudo chown -R www-data```` on the downloaded directory. 
 
##More info/Disclaimer 
No software is ever truly secure, and this software is far from an exception to that rule. This was written for learning purposes and should not be used for anything critical at all. It could use a lot of work and I am sure there are glaring security holes that I have not noticed. Use with caution, and help out if you find something that needs fixing. 
 
You can find a hosted example of this project at (http://mzero.space/projects/pParrot/). Please keep in mind that this is my private server, do not use this to send anything that is actually confidential (duh).