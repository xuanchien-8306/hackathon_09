import { BookFilled, PlusCircleFilled, PlusOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import { Button } from 'react-bootstrap'
import List from './List';

export default function Header(){
  return (
    <div className='w-[700px] d-flex flex-column justify-center text-center items-center shadow-xl'>
        <h1 className='bg-green-700 font-bold text-white h-[35px] rounded-sm'><BookFilled className='bg-green-700'/> Quản Lý Từ Vựng</h1>  
        <h2 className='text-green-700 font-bold flex justify-start gap-[8px] p-[10px]'><PlusCircleFilled /> Thêm từ mới</h2>
        <div className='flex gap-[8px] p-[10px]'>    
            <Input placeholder="Từ tiếng anh" className=''/>
            <Input placeholder="Nghĩa tiếng việt" className=''/>
            <Button variant="success" className=' bg-green-700 text-white font-bold border-green-700 rounded-sm w-[150px]'>Thêm</Button>            
        </div>
        <List/>
    </div>  
  )
}   
