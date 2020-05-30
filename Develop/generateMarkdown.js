function generateMarkdown(data) {
  return `
# ${data.title}
## ${data.name}

`;
}

module.exports = generateMarkdown;
