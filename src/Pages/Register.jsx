import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        retypePassword: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log(formData);
    };

  return (
    <div className="container mx-auto mt-10">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
                
                <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className="w-full p-2 border rounded-md"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="w-full p-2 border rounded-md"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Retype Password */}
                    <div className="mb-4">
                        <label htmlFor="retypePassword" className="block text-gray-700 text-sm font-bold mb-2">Retype Password</label>
                        <input 
                            type="password" 
                            name="retypePassword" 
                            id="retypePassword" 
                            className="w-full p-2 border rounded-md"
                            value={formData.retypePassword}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="w-full p-2 border rounded-md"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Register</button>
                    </div>
                </form>

                {/* Login Link */}
                <div className="text-center">
                    <p className="text-sm">Already have an account? <a href="#" className="text-blue-500">Login</a></p>
                </div>
            </div>
        </div>
  )
}

export default Register