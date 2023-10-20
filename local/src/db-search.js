import React from 'react'
import './paginate-style.css'
export default function DBSearch {
    let [data, setData] = ………………………………….
    let [page, setPage] = …………………………………..
    //อ่านคีย์เวิร์ดจาก URL
    let qStr = window.location.search
    let params = new ……………………………………….
    React.useEffect(() => { 
        fetch(………………………………………………………….)
        .then(response => response.json())
        .then(result => { 
            showData(result)
            paginate(result)
        })
        .catch(err => alert(err)) 
    }, [])
            
    const showData = (result) => {
        const numDocs = result.totalDocs
        const hidden = {
            visibility: 'hidden'
        }
            
        let r = (
        <div style={{maxWidth: '800px'}}>
        <span class="float-start mt-2">
        {
(numDocs === 0) 
? <>ไม่พบข้อมูล</>
: <>………………………………………………………………………………………….</>
}
</span>
{/* แสดงฟอร์ม เพื่อรับคีย์เวิร์ดส าหรับการค้นหา */}
<form action="/db/search" method="get" class="mb-2 …………………………">
<div class="d-inline-block">
<input type="text" name="q" defaultValue={params.get('q')}
class="form-control form-control-sm"/>
</div>&nbsp;
<button class="btn btn-sm ………………………….">ค้นหา</button>
</form>
<table class="table table-sm ………………………… caption-top" style={{maxWidth: '800px'}}>

            