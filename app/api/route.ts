import { NextResponse } from "next/server";
import {ConnectDB} from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel"
import { headers } from "next/headers";

const loadDB =async()=>{
    console.log('hna');
    await ConnectDB();
}

loadDB();

export async function GET(){
    console.log('working');
    const res= await BlogModel.find().select('-__v');
    console.log(res);
    return NextResponse.json(res)

}
export async function POST(request:Request){
 const newBlog=await request.json();
 console.log(newBlog.title);
//  await BlogModel.create({
//      title:res.title,
//      secondTitle:'wiig wiig',
     
//      content:'wiig gowa',        
//     },
// )
try{
    const savedBlog =await new BlogModel({...newBlog}).save();
    return NextResponse.json({}),{
        status:200
    }
}
 catch(err){

     return NextResponse.json({msg:'errorzz'}),
     {status:500}
 }
    
//  console.log('working');
//  return NextResponse.json({msg:'working'})

}
