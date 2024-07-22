"use client";

import React, {useEffect, useState} from "react";

const LikeHTML = ({propertyId}) => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`api/getArticle/${propertyId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Property Details</h1>
      {property && (
        <pre>{JSON.stringify(property, null, 2)}</pre>
      )}
    </div>
  );
};

export default LikeHTML;
