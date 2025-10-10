const API_URL = process.env.EXPO_PUBLIC_API_URL;

const updatePackageStatus = async (id: number) => {
  try {
    // console.log("UPDATING STATUS");
    
    await fetch(`${API_URL}orders/${id}/next-status`, {
      method: "POST",
    });
  } catch (err) {
    console.error("Failed to update status:", err);
  }
};

export default updatePackageStatus