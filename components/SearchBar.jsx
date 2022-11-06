import { FaSearch } from "react-icons/fa";



const SearchBar = () => {
    /*  const [posts, setPosts] = useState('');
     const [load, setLoad] = useState(true);
     const [inputText, setInputText] = useState('');
  */

    /* useEffect(() => {
        const loadPost = async () => {
            setLoad(true)

            let response = await axios.get(`${url_api}/api/histoires?populate=*`,
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json'
                    }
                })
            setPosts(response.data)
            setLoad(false)
        }
        loadPost()
    }, []) */

    /*  const history = useNavigate();
     const onSubmit = (e) => {
         history.push(`?search=${searchQuery}`);
         e.preventDefault();
     }; */

    /*  let Post = load ? '' : [...Object.values(posts.data)].filter(filtre => filtre.attributes.Article == query)
     console.log(Post) */
    return (
        <>
            <div className="search-bar" >
                <form action="/" method="get" >

                    <input type="search" name="search" id="search" placeholder='rechercher' />
                    <button type="submit"><FaSearch /></button>
                </form>
            </div>
            <div className="result">
                {/*  {load ? '' : [...Object.values(posts.data)].map(post => console.log(''))} */}
            </div>
        </>
    );
}

export default SearchBar;
