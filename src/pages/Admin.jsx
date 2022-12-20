import styled from 'styled-components';
import Axios from 'axios'
import {useState} from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    
`
const Form = styled.form`
    margin:10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    width: 100%;
`

const Header = styled.h1`
    
`
const Input = styled.input`
    padding:8px;
    border: solid 0.5px grey ;
    width: 70%;
    
`
const InputImg = styled.input`
    padding:8px;
    border:none;
    width: 70%;
    
`
const InputText = styled.h6`
    margin-bottom: 5px;
    margin-top: 10px;
    color: grey;
    font-size: 13px;
`
const Select = styled.select`
    width: 75%;
    padding:7px;
    border: solid 0.5px grey ;
`
const Option = styled.option`

`
const Button = styled.button`
    background-color: #050588;
    border:none;
    border-radius: 5px;
    width:20%;
    margin-top: 15px;
    color: white;
    padding: 10px;
    cursor:pointer;
`
const Admin = () => {
  var data
  const [color,setColor] = useState([])
    const [product,setProduct] = useState({});
    const [cat,setCat] = useState([])
    const [file,setFile] = useState([])
    const handleChange =(e)=>{
         setProduct(prev=>{
            return{...prev,[e.target.name]:e.target.value}}
            )
    }
    const handleCat = (e)=>{
        setCat({[e.target.name]:e.target.value.split(",")})
    }
    const handleCol = (e)=>{
      setColor({[e.target.name]:e.target.value.split(",")})
  }
 console.log(product)
//  console.log(cat)
 console.log(file)
const submit = async(e)=>{
    e.preventDefault()

 const fileName = new Date().getTime() + file.name
 const storage = getStorage(app);
const storageRef = ref(storage, fileName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
         data = {...product,img:downloadURL,categories:cat,color:color}
      console.log(data);
      try{
        const response =await Axios.post("http://127.0.0.1:5000/api/product/products",data);
        console.log(response)
    }catch(err){
        console.log(err)
    }
    
    });
  }
);





    
    

}
  return (
   <Container>
    <Header>New Product</Header>
    <Form onSubmit={submit}>
    <InputText>Image</InputText>
    <InputImg type="file" name="img" onChange={(e)=>setFile(e.target.files[0])}></InputImg>
    <InputText>Name</InputText>
    <Input type="text" placeholder='Jeans' name="title" onChange={handleChange}></Input>
    <InputText>Telphone</InputText>
    <Input type="text" placeholder='description...' name="desc" onChange={handleChange}></Input>
    <InputText>Price</InputText>
    <Input type="number" name="price" placeholder='100'  onChange={handleChange}></Input>
    <InputText>Categories</InputText>
    <Input type="text" placeholder='Jeans,shirts' name="categories"  onChange={handleCat}></Input>
    <InputText>Color</InputText>
    <Input type="text" placeholder='red,blue' name="color"  onChange={handleCol}></Input>
    <InputText>Stock</InputText>
    <Select name="inStock" onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
    </Select>
    <Button type='submit' >Create</Button>
    </Form>
   </Container>
  );
}

export default Admin;
