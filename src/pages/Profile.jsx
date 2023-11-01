
import image2 from '../assets/image2.jpeg'


const Profile = () => {
    
    return (
        

                    <div className="mt-5 pt-2 d-flex " dir='rtl' >
                        <div>
                            <img width={200} src={image2}></img></div>
                        <div className='mx-5'><label >نام کاربری </label>
                            <input type="text" value={JSON.parse(localStorage.getItem("userData"))?.username} /></div>
                        <div ><label>رمز عبور</label>
                            <input type="text" value={JSON.parse(localStorage.getItem("userData"))?.password} />
                        </div>


                    </div>

    )
}
export default Profile;