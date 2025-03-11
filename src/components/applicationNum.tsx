import { doc, getDoc, getFirestore } from 'firebase/firestore'; // Import Firestore functions
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from 'react'; // Import useState and useEffect
import { HiCheckCircle } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";

const db = getFirestore(); // Get Firestore instance

export default function ApplicationConfirmation() {
  const { pmsssId: pmsssIdFromURL } = useParams<{ pmsssId: string }>(); // Get pmsssId from URL
  const [fetchedPmsssId, setFetchedPmsssId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplicationData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (pmsssIdFromURL) {
          // **Fetch based on userId (assuming you want to fetch document for "sample-user-id")**
          const applicationDocRef = doc(db, 'applications', pmsssIdFromURL); // Use pmsssIdFromURL as document ID
          const docSnap = await getDoc(applicationDocRef);

          if (docSnap.exists()) {
            const applicationData = docSnap.data();
            // **Now, get the pmsssId from the fetched data**
            setFetchedPmsssId(applicationData.pmsssId);
            console.log("ApplicationConfirmation - Fetched pmsssId from Firestore:", applicationData.pmsssId);
          } else {
            setError("Application ID not found.");
            console.error("No document found in Firestore for this application.");
          }
        } else {
          setError("PMSSS Application ID is missing in the URL.");
          console.error("pmsssId is missing in URL parameters");
        }
      } catch (e) {
        setError("Failed to fetch Application ID.");
        console.error("Error fetching application data from Firestore:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplicationData();
  }, [pmsssIdFromURL]);

  return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
      <div className="min-h-screen bg-slate-700/80">
        <div className="container mx-auto px-4 py-8">
          <Card className="mx-auto max-w-2xl rounded-lg bg-white/90 shadow-md backdrop-blur-sm dark:bg-gray-800/90">
            <div className="text-center">
              <HiCheckCircle className="mx-auto mb-4 size-16 text-green-500" />
              <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Your Application is Complete!
              </h1>

              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Keep this number handy. You'll use it to track your application status.
              </p>

              {isLoading && <p>Loading Application Number...</p>}
              {error && <p className="text-red-500">{error}</p>}

              <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md dark:border-gray-400 dark:bg-gray-600/70">
                <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-300">
                  Application Number
                </p>
                <div className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {fetchedPmsssId || "Error fetching ID"}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  as={Link}
                  to="/check-status"
                  size="xl"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg transition-all hover:from-green-500 hover:to-blue-600 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <div className="flex items-center justify-center gap-2">
                    <HiMagnifyingGlass className="size-6 text-white/90" />
                    <span className="text-lg font-semibold tracking-tight">
                      Track Application Status
                    </span>
                  </div>
                </Button>
              </div>

              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                A confirmation email has been sent to your registered email address.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}