import { Button, Label, Radio } from "flowbite-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function EligibilityForm() {
  const [formState, setFormState] = useState({
    domicile: "",
    income: "",
    admission: "",
    diploma: "",
    marks: "",
    age: "",
  });

  const [eligibilityMessage, setEligibilityMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { domicile, income, admission, diploma, marks, age } = formState;

    if (
      domicile === "yes" &&
      income === "yes" &&
      admission === "yes" &&
      diploma === "yes" &&
      marks === "yes" &&
      age === "yes"
    ) {
      setEligibilityMessage("Congratulations! You meet the eligibility criteria.");
    } else {
      setEligibilityMessage("Sorry, you do not meet the eligibility criteria.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
      {/* Overlay and blur effect */}
      <div className="flex size-full items-center justify-center bg-gray-700/80 py-10 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:text-white">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Check your Eligibility
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Domicile Question */}
            <div className="mb-8">
              <Label htmlFor="domicile" className="mb-3 block text-lg">
                Are you a domicile of Jammu and Kashmir or Ladakh?
              </Label>
              <div className="flex items-center space-x-8">
                <div>
                  <Radio
                    id="domicile-yes"
                    name="domicile"
                    value="yes"
                    onChange={handleChange}
                  />
                  <Label htmlFor="domicile-yes" className="ml-2">
                    Yes
                  </Label>
                </div>
                <div>
                  <Radio
                    id="domicile-no"
                    name="domicile"
                    value="no"
                    onChange={handleChange}
                  />
                  <Label htmlFor="domicile-no" className="ml-2">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Income Question */}
            <div className="mb-8">
              <Label htmlFor="income" className="mb-3 block text-lg">
                Do you have a family income less than 8 Lakhs per annum?
              </Label>
              <div className="flex items-center space-x-8">
                <div>
                  <Radio
                    id="income-yes"
                    name="income"
                    value="yes"
                    onChange={handleChange}
                  />
                  <Label htmlFor="income-yes" className="ml-2">
                    Yes
                  </Label>
                </div>
                <div>
                  <Radio
                    id="income-no"
                    name="income"
                    value="no"
                    onChange={handleChange}
                  />
                  <Label htmlFor="income-no" className="ml-2">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Admission Question */}
            <div className="mb-8">
              <Label htmlFor="admission" className="mb-3 block text-lg">
                Have you applied for admission in AICTE-approved colleges?
              </Label>
              <div className="flex items-center space-x-8">
                <div>
                  <Radio
                    id="admission-yes"
                    name="admission"
                    value="yes"
                    onChange={handleChange}
                  />
                  <Label htmlFor="admission-yes" className="ml-2">
                    Yes
                  </Label>
                </div>
                <div>
                  <Radio
                    id="admission-no"
                    name="admission"
                    value="no"
                    onChange={handleChange}
                  />
                  <Label htmlFor="admission-no" className="ml-2">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Diploma/Degree Question */}
            <div className="mb-8">
              <Label htmlFor="diploma" className="mb-3 block text-lg">
                Are you pursuing a diploma or degree from a recognized
                institution?
              </Label>
              <div className="flex items-center space-x-8">
                <div>
                  <Radio
                    id="diploma-yes"
                    name="diploma"
                    value="yes"
                    onChange={handleChange}
                  />
                  <Label htmlFor="diploma-yes" className="ml-2">
                    Yes
                  </Label>
                </div>
                <div>
                  <Radio
                    id="diploma-no"
                    name="diploma"
                    value="no"
                    onChange={handleChange}
                  />
                  <Label htmlFor="diploma-no" className="ml-2">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Marks Question */}
            <div className="mb-8">
              <Label htmlFor="marks" className="mb-3 block text-lg">
                Did you score at least 60% in your 12th-grade examinations?
              </Label>
              <div className="flex items-center space-x-8">
                <div>
                  <Radio
                    id="marks-yes"
                    name="marks"
                    value="yes"
                    onChange={handleChange}
                  />
                  <Label htmlFor="marks-yes" className="ml-2">
                    Yes
                  </Label>
                </div>
                <div>
                  <Radio
                    id="marks-no"
                    name="marks"
                    value="no"
                    onChange={handleChange}
                  />
                  <Label htmlFor="marks-no" className="ml-2">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Age Question */}
            <div className="mb-8">
              <Label htmlFor="age" className="mb-3 block text-lg">
                Are you below 25 years of age?
              </Label>
              <div className="flex items-center space-x-8">
                <div>
                  <Radio
                    id="age-yes"
                    name="age"
                    value="yes"
                    onChange={handleChange}
                  />
                  <Label htmlFor="age-yes" className="ml-2">
                    Yes
                  </Label>
                </div>
                <div>
                  <Radio
                    id="age-no"
                    name="age"
                    value="no"
                    onChange={handleChange}
                  />
                  <Label htmlFor="age-no" className="ml-2">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full text-xl">
              Check your eligibility
            </Button>
          </form>

          {/* Eligibility Result */}
          {eligibilityMessage && (
            <div className={`mt-8 text-center ${eligibilityMessage.includes('Congratulations') ? 'text-green-500' : 'text-red-500'}`}>
              <p className="text-lg font-semibold">{eligibilityMessage}</p>
              {eligibilityMessage.includes("Congratulations") && (
                <Button className="mt-4 w-full text-xl" color="success" onClick={handleRegisterClick}>
                  Register
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EligibilityForm;

