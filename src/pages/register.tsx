// PMSSSRegister.tsx

import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "../firebase"; 

function PMSSSRegister() {
  const [district, setDistrict] = useState("");
  const [school, setSchool] = useState("");
  const [schools, setSchools] = useState<string[]>([]);
  const [gender, setGender] = useState("");
   // State for Date of Birth

  const [formData, setFormData] = useState({
    aadhaar: "",
    name: "",
    mobile: "",
    email: "",
    district: "",
    school: "",
    pmsssId: "",
    status: "Application Submitted",
    gender: "",
    dob: "", 
  });

  const [errors, setErrors] = useState({
    aadhaar: "",
    name: "",
    mobile: "",
    email: "",
    district: "",
    school: "",
    gender: "",
    dob: "", 
  });

  const districtToSchools: Record<string, string[]> = {
    Anantnag: ["Govt. High School, Anantnag", "Model School, Anantnag"],
    Baramulla: ["Govt. School, Baramulla", "Saint Joseph's School, Baramulla"],
    Srinagar: ["Burn Hall School, Srinagar", "Tyndale Biscoe School, Srinagar"],
    Jammu: ["Delhi Public School, Jammu", "Model Academy, Jammu"],
    Udhampur: ["Army Public School, Udhampur", "Kendriya Vidyalaya, Udhampur"],
    Leh: ["Kendriya Vidyalaya, Leh", "Lamdon Model School, Leh"],
    Kargil: ["Govt. School, Kargil", "Lamdon Model School, Kargil"],
  };

  const navigate = useNavigate();

  
  const generatePMSSSRegistrationId = () => {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000); 
    return `PMSSS-${randomNumber}`;
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);
    setSchools(districtToSchools[selectedDistrict] || []);
    setFormData((prev) => ({ ...prev, district: selectedDistrict }));
  };

  const handleSchoolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSchool = event.target.value;
    setSchool(selectedSchool);
    setFormData((prev) => ({ ...prev, school: selectedSchool }));
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    setFormData((prev) => ({ ...prev, gender: selectedGender }));
  };

    


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    switch (id) {
      case "aadhaar":
        setErrors((prev) => ({
          ...prev,
          aadhaar: value.length === 12 ? "" : "Aadhaar number must be 12 digits",
        }));
        break;
      case "mobile":
        setErrors((prev) => ({
          ...prev,
          mobile: /^\d{10}$/.test(value) ? "" : "Mobile number must be 10 digits",
        }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address",
        }));
        break;
      case "name":
        setErrors((prev) => ({
          ...prev,
          name: value.trim() !== "" ? "" : "Name cannot be empty",
        }));
        break;
        case "dob":
          setErrors((prev) => ({
            ...prev,
            dob: value ? "" : "Date of Birth is required", 
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      aadhaar: formData.aadhaar.length === 12 ? "" : "Aadhaar number must be 12 digits",
      name: formData.name.trim() !== "" ? "" : "Name cannot be empty",
      mobile: /^\d{10}$/.test(formData.mobile) ? "" : "Mobile number must be 10 digits",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email address",
      district: formData.district ? "" : "District is required",
      school: formData.school ? "" : "School is required",
      gender: formData.gender ? "" : "Gender is required",
      dob: formData.dob ? "" : "Date of Birth is required", 
    };

    setErrors(newErrors);

    console.log("newErrors:", newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const pmsssRegistrationId = generatePMSSSRegistrationId();
        const updatedFormData = {
          ...formData,
          pmsssId: pmsssRegistrationId,
        };

        await saveUserData(updatedFormData);
        alert("Form submitted successfully! Your Registration ID is: " + pmsssRegistrationId);
        console.log("Navigating to upload page");
        navigate(`/upload/${pmsssRegistrationId}`);
      } catch (error) {
        console.error("Error submitting the form:", error);
        console.log("Firebase Error:", error);
        alert("Error submitting the form. Please try again.");
      }
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
      <div className="flex size-full items-center justify-center bg-gray-900/80 py-7 backdrop-blur-sm">
        <div className="w-full max-w-2xl rounded-lg bg-white p-8 py-5 shadow-lg dark:bg-gray-800 dark:text-white">
          <div className="py-5">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Register For The Scheme
            </h2>
            <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-300">
              Please ensure the following details are accurate. This will be used
              to disburse your scholarship funds.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Aadhaar Number */}
              <div className="mb-4">
                <Label htmlFor="aadhaar" className="mb-2 block text-sm font-medium">
                  Aadhaar Number
                </Label>
                <TextInput
                  id="aadhaar"
                  type="text"
                  placeholder="Enter your Aadhaar Number"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  required
                  className="dark:text-gray-200"
                />
                {errors.aadhaar && (
                  <p className="mt-1 text-sm text-red-500">{errors.aadhaar}</p>
                )}
              </div>

              {/* Full Name */}
              <div className="mb-4">
                <Label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Full Name
                </Label>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="dark:text-gray-200"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <Label htmlFor="mobile" className="mb-2 block text-sm font-medium">
                  Mobile Number
                </Label>
                <TextInput
                  id="mobile"
                  type="text"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="dark:text-gray-200"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </Label>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="dark:text-gray-200"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* District */}
              <div className="mb-4">
                <Label htmlFor="district" className="mb-2 block text-sm font-medium">
                  District
                </Label>
                <Select
                  id="district"
                  required
                  value={district}
                  onChange={handleDistrictChange}
                  className="dark:text-gray-200"
                >
                  <option value="" disabled>
                    Select your district
                  </option>
                  <option value="Anantnag">Anantnag</option>
                  <option value="Baramulla">Baramulla</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Jammu">Jammu</option>
                  <option value="Udhampur">Udhampur</option>
                  <option value="Leh">Leh</option>
                  <option value="Kargil">Kargil</option>
                </Select>
                {errors.district && (
                  <p className="mt-1 text-sm text-red-500">{errors.district}</p>
                )}
              </div>

              {/* School Name */}
              <div className="mb-4">
                <Label htmlFor="school" className="mb-2 block text-sm font-medium">
                  School Name
                </Label>
                <Select
                  id="school"
                  required
                  value={school}
                  onChange={handleSchoolChange}
                  className="dark:text-gray-200"
                >
                  <option value="" disabled selected>
                    Select your school
                  </option>
                  {schools.map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </Select>
                {errors.school && (
                  <p className="mt-1 text-sm text-red-500">{errors.school}</p>
                )}
              </div>

              {/* Gender */}
              <div className="mb-4">
                <Label htmlFor="gender" className="mb-2 block text-sm font-medium">
                  Gender
                </Label>
                <Select
                  id="gender"
                  required
                  value={gender}
                  onChange={handleGenderChange}
                  className="dark:text-gray-200"
                >
                  <option value="" disabled selected>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
                )}
              </div>
                {/* Date of Birth */}
              <div className="mb-4">
                <Label htmlFor="dob" className="mb-2 block text-sm font-medium">
                  Date of Birth
                </Label>
                <TextInput
                  id="dob"
                  type="date" 
                  placeholder="Enter your date of birth"
                  value={formData.dob}
                  onChange={handleInputChange} 
                  required
                  className="dark:text-gray-200"
                />
                {errors.dob && (
                  <p className="mt-1 text-sm text-red-500">{errors.dob}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="mt-4 w-full">
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMSSSRegister;