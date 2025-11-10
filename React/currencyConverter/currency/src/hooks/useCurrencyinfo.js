import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});
  const [names, setNames] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // 1. Get exchange rates
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/afcda9e1047330a5ee0315d0/latest/${baseCurrency}`
        );
        const json = await res.json();

        if (json && json.conversion_rates) {
          setRates(json.conversion_rates);
        } else {
          setRates({});
        }

        // 2. Get currency names (only once ideally, but safe to refetch)
        const nameRes = await fetch(
          "https://openexchangerates.org/api/currencies.json"
        );
        const nameJson = await nameRes.json();
        setNames(nameJson);

      } catch (err) {
        console.error("Error fetching currency data:", err);
        setRates({});
        setNames({});
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [baseCurrency]);

  return { rates, names, loading };
}

export default useCurrencyInfo;
