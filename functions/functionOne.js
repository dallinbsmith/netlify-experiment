exports.handler = async () =>{
    console.log('function ran')
    const data = {
        name: 'something',
         age: 35,
         job: 'somethingelse'
    }
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}