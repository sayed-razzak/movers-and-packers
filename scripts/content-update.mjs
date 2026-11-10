import fs from 'node:fs'
for(const language of ['en','ar']){
const file='src/i18n/'+language+'.json', data=JSON.parse(fs.readFileSync(file,'utf8'))
data.serviceCards[2].bullets[1]=language==='ar'?'المساعدة في التغليف وفك التغليف':'Packing and unpacking assistance'
fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n')
}
