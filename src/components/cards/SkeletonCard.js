import Skeleton, { SkeletonTheme  } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import './card.css';
const SkeletonCard = () =>{
    return (
        <SkeletonTheme baseColor="#aaa" highlightColor="#dadada">
        <div className='card'>
            <Skeleton className="img">
                    
            </Skeleton>
            <h2><Skeleton/></h2>
            <h3><Skeleton/></h3>
            <h4><Skeleton/></h4>
        </div>
        </SkeletonTheme>
    )
}

export default SkeletonCard