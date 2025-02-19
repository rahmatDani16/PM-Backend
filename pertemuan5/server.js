import express from 'express';
const app = express();
app.use(express.json());

app.get('/',(req,res) =>{
    res.send("Express  ..!")
})

app.get('/jsonString', (req, res) => {
    res.send({statu: 200, message: "Succesfuly" });
  });

app.get('/json',(req,res)=>{
    res.json({
        staus:201,
        message: "Data succefuly created",
        data:{
            id : 1,
            name : "Dani",
            age: 18 
        }
    })
})
//mengambil data secara dinamis melalui url 
//gunkan req.params 
app.get('/json/:nama/:umur',(req,res) =>{
    //memakai konsep dekstruring 
    // const {nama,umur} = req.params
    // res.json({
    //     data : {
    //         nama,
    //         umur
    //     }
    // })
    // console.log(req.params);
    const dataUrl = req.params
    res.json({
        data: dataUrl
    })
})
app.get('/getData/:id',(req,res)=>{
    let data =[{
        id : 1,
        name : "Dani",
        age: 18
    }]
    let datas = [{
        id : 2,
        name : "agus",
        age: 20
    }]
    let duta = [{
        id : 3,
        name : "baging",
        age: 19
    }]
    // const { id } = req.params;
    // const datal = datal.find((element)=> element.id == id)
    // if(!datal){
    //     return res.status(404).json({
    //         status: 404,
    //         message: "Data not found"
    //     })
    // }

    const requestedId = parseInt(req.params.id);

    if (requestedId === data.id) {
        return res.json({
            status: 201,
            message: "Data successfully created",
            data: id,
        });
    } else if (requestedId === datas.id) {
        return res.json({
            status: 201,
            message: "Data successfully created",
            data: datas,
        });
    } else if (requestedId === duta[0].id) {
        return res.json({
            status: 201,
            message: "Data successfully created",
            data: duta,
        });
    } else {
        return res.status(404).json({
            status: 404,
            message: "Data not found"
        });
    }
});
//Kasih tanda tanya digunakan untuk params yang opsional 
app.get('/data/:id',(req,res)=>{
    const {id} = req.params
    res.json({
        data : id
    })
})
app.get('getData/:id',(req,res)=>{
    const {id} = req.params
    res.json({
        data : id
    })
})
//jalankan servernya 
app.listen(5000,()=>{
    console.log('Apakah kamu baik baik saja tuann....!!');
    
})