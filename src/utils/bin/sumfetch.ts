/* eslint-disable prettier/prettier */
import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {

  if (config.ascii === 'cveinnt'|| window.innerWidth >=1024) {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         
        @@@                  @@@ @@          
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         

`;
  } else if(window.innerWidth >=1024) {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              ----------- 
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             SKILLS
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           Html5, CSS3, JavaScript, 
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          jQuery, React, NextJS, 
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       TypeScript, Bootstrap, Sass,
▐▓                                 ▐▓       Git, etc...
▐▓            > I G O R            ▐▓       -----------
▐▓                                 ▐▓        ABOUT
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        ${config.name}
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u> 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            -----------
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                CONTACT
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                                             <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                             <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
                                            -----------
                                             EXPEREINCE
                                             Frontend Developer <u><a href="https://linkedin.com/company/${config.experience.komuna}" target="_blank">@Komuna.dev</a></u> since March 2023
                                             Frontend Developer <u><a href="https://linkedin.com/company/${config.experience.scito}" target="_blank">@Scito</a></u> since March 2023
                                            
`;
  } else {
    return `
 sumfetch
-----------
 SKILLS 
Html5, CSS3, JavaScript,
jQuery, React, NextJS,
TypeScript, Bootstrap, Sass,
Git, etc...
-----------
 ABOUT
 ${config.name}
 <u><a href="${config.resume_url}" target="_blank">resume</a></u> 
爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
-----------
 CONTACT
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
-----------
 EXPEREINCE
 Frontend Developer <u><a href="https://linkedin.com/company/${config.experience.komuna}" target="_blank">@Komuna.dev</a></u> since March 2023
 Frontend Developer <u><a href="https://linkedin.com/company/${config.experience.scito}" target="_blank">@Scito</a></u> since March 2023
`
  }
};

export default sumfetch;
