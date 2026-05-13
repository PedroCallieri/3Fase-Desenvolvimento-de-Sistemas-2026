import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { FaUserAlt } from 'react-icons/fa'

const PatientsList = () => {
    const [paciente, setPacientes] = useState([])
    const [ages, setAges] = useState({})
    const [searchTerm, setSearchTerm] = useState("")

    const caulculeAges = (birthdate) => {
        if (!birthdate) return "-"
        const today = new Date()
        const birthdateDate = new Date(birthdate)
        let age = today.getFullYear() - birthdateDate.getFullYear()
        const monthDiff = today.getMonth() - birthdateDate.getMonth()
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--
        }
        return age
    }

    useEffect(()=>{
        const fetchPatients 

    },[])

    return (
        <div>PatientsList</div>
    )
}

export default PatientsList