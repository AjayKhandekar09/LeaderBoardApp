
import { useEffect , useState } from "react";
import data from "../data.json"


const LeaderBoardTable = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state
  
  
  
    useEffect(() => {
        const fetchData = async () => {
          try {
              setIsLoading(true)
      
              setTimeout(()=>{
                  setStudents(data.students);
                  setIsLoading(false);
              },500)
      
          } catch (error) {
              setError(error)
              setIsLoading(false)
          }
          
        };
        fetchData();
    }, []);
  
    if (isLoading) {
        return <div className='text-neaveyBlue'>Loading...</div>; // Render loading indicator while fetching data
    }
  
    if (error) {
        return <div>Error: {error.message}</div>; // Render error message if fetch fails
    }
  
    return (


        
      <div className='flex justify-center'>
          <table className='table-fixed border border-slate-600 '>
              <thead>
                  <tr>
                      <th className="columns-3xs width-3xs bg-darkBlue border border-slate-600 h-10 ">
                          Name
                      </th>
                      <th className="columns-3xs bg-darkBlue border border-slate-600">
                          Score
                      </th>
                  </tr>
              </thead>
              <tbody>
              {
                    students.map((Element)=>{
                        // console.log("entered");
                       return( <tr>
                            <td className="border border-slate-600 bg-neaveyBlue h-10">
                                {Element.name}
                            </td>
                            <td className="bg-neaveyBlue border border-slate-600 ">
                                {Element.score}
                            </td>
                        </tr>)
                    })}
              </tbody>
          </table>
      </div>
    )
}

export { LeaderBoardTable }