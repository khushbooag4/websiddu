(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{414:function(e,t,r){"use strict";r.r(t);var a=r(47),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("As part of my on-campus jobs, I built a custom form builder for the UW Dept of Sustainability. I used MEAN (MongoDB, Express.js, Angular.js, Node) as my tech stack. I was the only designer and developer for the whole application. So, for that I was required to integrate the application with UW NetID using SAML. After toiling for a couple of months, I was able to successfully integrate UWNetID with the node application. There was no good documentation on how to do that. So, I decided to write this awesome blog post to help other people like me.")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" I assume that you have prior knowledge working with mongoDB and node. If you don't have any idea what those are scroll till the end enjoy the cat gif.")]),e._v(" "),r("h3",{attrs:{id:"step-1-get-your-sub-domain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-get-your-sub-domain"}},[e._v("#")]),e._v(" Step 1: Get your sub-domain.")]),e._v(" "),r("p",[e._v('First you have to get your sub domain on UW. You should raise a request to the UWIT for the sub domain. In my case its "'),r("a",{attrs:{href:"http://green-certification.uw.edu",target:"_blank",rel:"noopener noreferrer"}},[e._v("green-certification.uw.edu"),r("OutboundLink")],1),e._v('". Send an email to '),r("a",{attrs:{href:"mailto:help@uw.edu"}},[e._v("help@uw.edu")]),e._v(" if you have proper permissions. And ask them to point it to your DNS server(If you got one)")]),e._v(" "),r("h3",{attrs:{id:"step-2-get-valid-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-get-valid-certificates"}},[e._v("#")]),e._v(" Step 2: Get valid certificates")]),e._v(" "),r("p",[e._v("Second you need to get valid HTTPS certificates for your server. You have to use those certificates to run the node server and the shibboleth sever. You can get those from UWIT again. Just send an email to "),r("a",{attrs:{href:"mailto:help@uw.edu"}},[e._v("help@uw.edu")]),e._v(" requisition for brand new secure certificates for your newborn domain.")]),e._v(" "),r("h3",{attrs:{id:"step-3-install-shibb-on-your-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-install-shibb-on-your-server"}},[e._v("#")]),e._v(" Step 3: Install Shibb on your server")]),e._v(" "),r("p",[e._v("Then, next you have to install Shibboleth on your server(You don't have to install apache). Follow this link "),r("a",{attrs:{href:"https://wiki.shibboleth.net/confluence/display/SHIB2/Installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.shibboleth.net/confluence/display/SHIB2/Installation"),r("OutboundLink")],1),e._v("\nor again request UWIT to install it, if you have a server that is managed by the UWIT. Once you configured the Shibboleth on to your server, make sure you are running some server it can be node or apache or any other.")]),e._v(" "),r("p",[e._v("Here is my shibb configuration file")]),e._v(" "),r("p",[e._v("Make sure you remember the EntitiyID in line number 10 that should match with your EnitityID in the IDP server. And also make sure that you give valid certificates "),r("code",[e._v("CredentialResolver")]),e._v(" at line number 59 and 60.")]),e._v(" "),r("p",[e._v("You should be able to get the XML metadata\n"),r("a",{attrs:{href:"https://green-certification.uw.edu/Shibboleth.sso/Metadata",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://green-certification.uw.edu/Shibboleth.sso/Metadata"),r("OutboundLink")],1),e._v(" with proper values.")]),e._v(" "),r("h3",{attrs:{id:"step-4-register-your-server-with-idp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4-register-your-server-with-idp"}},[e._v("#")]),e._v(" Step 4: Register your server with IDP")]),e._v(" "),r("p",[e._v("Once you get all the details correct you should ask UWIT to register your server with the IDP. Be careful about the name and make sure that you ask to release the attributes that are required(e.g NetID, FullName etc...). You can check the IDP in this URL "),r("a",{attrs:{href:"https://iam-tools.u.washington.edu/spreg/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://iam-tools.u.washington.edu/spreg/"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:"http://res.cloudinary.com/websiddu/image/upload/v1440464533/saml1_yn7gcm.png",alt:"Img"}})]),e._v(" "),r("p",[e._v("Make sure this entityID matches with the entityID in your sihbb metadata. Also, ask for the ACS POST request to point to the correct URL. Once you are authenticated the data is passed to this URL as post request, so this is where you do all important stuff.")]),e._v(" "),r("h3",{attrs:{id:"step-5-integrate-netid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-5-integrate-netid"}},[e._v("#")]),e._v(" Step 5: Integrate netID")]),e._v(" "),r("p",[e._v("In your node application use the library uwshib ("),r("a",{attrs:{href:"https://github.com/drstearns/passport-uwshib",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/drstearns/passport-uwshib"),r("OutboundLink")],1),e._v(") to integrate your application. And again make sure that you used the same entityID and Certificates that you used before to run the https server.")]),e._v(" "),r("p",[r("small",[e._v("Taken from "),r("a",{attrs:{href:"https://github.com/drstearns/passport-uwshib",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/drstearns/passport-uwshib"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"step-6-sleep-in-peace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-6-sleep-in-peace"}},[e._v("#")]),e._v(" Step 6: Sleep in peace")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://thoughtcatalog.files.wordpress.com/2013/05/cat1.gif?w=800&h=570#center",alt:"Cat"}})]),e._v(" "),r("h3",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further reading:")]),e._v(" "),r("ul",[r("li",[e._v("Email me at "),r("a",{attrs:{href:"mailto:me@websiddu.com"}},[e._v("me@websiddu.com")]),e._v(" if you have any questions")]),e._v(" "),r("li",[e._v("Read passport.js documentation")])])])}),[],!1,null,null,null);t.default=o.exports}}]);