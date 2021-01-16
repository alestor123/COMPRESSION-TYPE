var fileType = require('file-type'),
type = ['7z','bz2','gz','rar','tar','zip','xz','gz'];
module.exports = name => {
if(type.includes(fileType(name).ext)) return fileType(name).ext
}