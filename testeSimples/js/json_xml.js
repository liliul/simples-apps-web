function jsonToXml(json) {
  let xml = '';

  for (let key in json) {
    if (Array.isArray(json[key])) {
      json[key].forEach(item => {
        xml += `<${key}>` + jsonToXml(item) + `</${key}>`;
      });
    } else if (typeof json[key] === 'object') {
      xml += `<${key}>` + jsonToXml(json[key]) + `</${key}>`;
    } else {
      xml += `<${key}>${json[key]}</${key}>`;
    }
  }

  return xml;
}

// Exemplo de uso
const jsonData = {
  person: {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling"]
  }
};

const xmlData = jsonToXml(jsonData);
console.log(xmlData);
