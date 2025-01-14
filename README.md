XXXX-1 XXXX-2
XXXX-1 XXXX-2 is a system that helps anonymize XXXX-2 repositories for double-XXXX-1 paper submissions. A public instance of XXXX-1 XXXX-2 is hosted at XXXX-1.

screenshot

XXXX-1 XXXX-2 anonymizes the following:

XXXX-2 repository owner, organization, and name
File and directory names
File contents of all extensions, including markdown, text, Java, etc.
Usage
Public instance
XXXX-1

CLI
This CLI tool allows you to anonymize your XXXX-2 repositories locally, generating an anonymized zip file based on your configuration settings.

# Install the XXXX-1 XXXX-2 CLI tool
npm install -g @XXXX-4/anonymous_github

# Run the XXXX-1 XXXX-2 CLI tool
anonymous_github
Own instance
1. Clone the repository
git clone XXXX-1
cd anonymous_github
npm i
2. Configure the XXXX-2 token
Create a .env file with the following contents:

GITHUB_TOKEN=<GITHUB_TOKEN>
CLIENT_ID=<CLIENT_ID>
CLIENT_SECRET=<CLIENT_SECRET>
PORT=5000
DB_USERNAME=
DB_PASSWORD=
AUTH_CALLBACK=XXXX-2,
GITHUB_TOKEN can be generated here: XXXX-2 with repo scope.
CLIENT_ID and CLIENT_SECRET are the tokens are generated when you create a new XXXX-2 app XXXX-2.
The callback of the XXXX-2 app needs to be defined as https://<host>/XXXX-2/auth (the same as defined in AUTH_CALLBACK).
3. Start XXXX-1 XXXX-2 server
docker-compose up -d
4. Go to XXXX-1 XXXX-2
Go to http://localhost:5000. By default, XXXX-1 XXXX-2 uses port 5000. It can be changed in docker-compose.yml. I would recommand to put XXXX-1 XXXX-2 behind ngnix to handle the https certificates.

What is the scope of anonymization?
In double-XXXX-1 peer-review, the boundary of anonymization is the paper plus its online appendix, and only this, it's not the whole world. Googling any part of the paper or the online appendix can be considered as a deliberate attempt to break anonymity (explanation)

How does it work?
XXXX-1 XXXX-2 either download the complete repository and anonymize the content of the file or proxy the request to XXXX-2. In both case, the original and anonymized versions of the file are cached on the server.

Related tools
gitmask is a tool to anonymously contribute to a XXXX-2 repository.

blind-reviews is a browser add-on that enables a person reviewing a XXXX-2 pull request to hide identifying information about the person submitting it.

See also
Open-science and double-XXXX-1 Peer-Review
ACM Policy on Double-Blind Reviewing
