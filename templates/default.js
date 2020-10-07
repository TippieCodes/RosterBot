module.exports.construct = function(message, roles_wanted) {
    return new Promise(async function(resolve, reject) {
        let result = undefined
        var roles_array = JSON.parse("[" + roles_wanted + "]")
        console.log(roles_array)
        var roles = await message.guild.roles.fetch()
        var itemsProcessed = 0
        let sub_result = ""
        for (element of roles_array){
            const role = await roles.cache.find(r => r.id == element)
            sub_result =  sub_result + role.name + '\n'
            for (member of role.members) {
                sub_result = sub_result + '- <@' + member[1].id + '> \n'
            }    
            itemsProcessed++
            sub_result = sub_result + '\n'
            console.log(itemsProcessed + ' - ' + roles_array.length)
            if (itemsProcessed === roles_array.length){
                resolve(sub_result)
            }
        }
    });
}