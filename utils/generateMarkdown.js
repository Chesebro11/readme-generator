// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "NONE") {
    return ''
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeInput) {
  return `## ${readmeInput.projectname}

  ### Created by: ${readmeInput.username}
  <a href="https://github.com/${readmeInput.githubname}">Github: ${readmeInput.githubname} </a>

  ## Table Of Contents

  *[Project Description](#project-description)
  *[License Information](#license-information)
  *[Installion Instructions](#installion-instruction)
  *[Usage Information](#usage-information)
  *[Project Contribution](#project-contributions)
  *[Testing Instructions](#testing-instructions)
  *[Contact](#contact)

  ## Project Description
  ${readmeInput.projectdescription}

  ## License Information
  ${renderLicenseBadge(readmeInput.badges)}

  ## Installation Instructions
  ${readmeInput.install}

  ## Usage Information
  ${readmeInput.usage}

  ## Contact
  ${readmeInput.email}
  <a href="https://github.com/${readmeInput.githubname}">Github: ${readmeInput.githubname} </a>

`;
}

module.exports = {generateMarkdown};
