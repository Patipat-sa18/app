export default function Page({params}: {params:{ slug:string}}){
    return <div>My Post:{params.slug}</div>
}

export default async function Page({
    params,
}:{
params: Promise<{slug:String}>
}){
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
}