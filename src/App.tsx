import axios from 'axios'
import { useEffect, useState } from 'react'
import Country from './components/Country'
import { CountryType } from './types'

function App() {

    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState<CountryType[]>([])
    const getContries = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all")
            setCountries(data);
        } catch {
            console.log('ülkeleri alirken hata oluştu')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getContries();
    }, [])

    console.log({ countries })
    return (
        <>
            {loading ? 'loading...' :
                countries.map((country) => {
                    return (
                        <Country key={country.name} country={country} />
                    )
                })

            }
        </>
    )
}

export default App;