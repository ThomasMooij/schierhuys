import { format } from "date-fns";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../functions/newRequest.js";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const dates = params.get("dates");

  let newDates = [];

  for (let i = 0; i < dates.split(",").length; i++) {
    newDates.push(format(new Date(dates.split(",")[i]), "yyyy-MM-dd"));
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/reserve", { payment_intent, newDates });
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Schierhuys | Betaling gelukt!</title>
      </Helmet>
      Hartelijk bedankt voor uw bestelling, u krijgt per email een bevestiging
      en wordt binnen enkele seconden door verwezen
    </div>
  );
};

export default Success;
