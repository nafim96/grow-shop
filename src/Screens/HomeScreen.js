import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productAction';
import Error from '../components/Error';
import LoadingBox from '../components/LoadingBox';
import Product from '../components/Product';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => {
    return state.productList
  })
  const { loading, error, products } = productList;
  console.log(products);
  
  useEffect(() => {
    dispatch(listProduct())
  
    
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(false)
  // const[error,setError]= useState(false)
    // const fetchData = async () => {
    //     try {
    //       setLoading(true)
    //       const { data } = await axios.get("http://localhost:5000/api/product")
    //       setLoading(false)
    //       setProducts(data.product)
    //     } catch (err) {
    //       setError(err.message)
    //       setLoading(false)
    //     }
     
    // }
    // fetchData()
    // fetch("http://localhost:5000/api/product").then(data => {
    //   setProducts(data)
    //   console.log(data);
    // }).catch(err=>{console.log(err.message);})
  },[])
  return (
      
    <div>
      {
        loading ? <LoadingBox/> :
        error ? <Error >{error}</Error> :
        <div className="row center">
          {
            products.map(product => (
              <Product key={product._id} product={product}/>
            ))
          }
        </div>
      }
         
      </div>
    );
};

export default HomeScreen;