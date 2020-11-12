import React, { useState } from "react";
import useFetchJobs from "../useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Jobs/Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";
import Loader from "./Loader/Loader";
import Slider from "./Slider/Slider";
import ContactForm from "./ContactForm/ContactForm";
import Menu from "./Menu";

export default function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <>
      <Menu />
      <Slider />
      <Container className="my-4">
        <h3 className="mb-4">Search Jobs</h3>
        <SearchForm params={params} onParamChange={handleParamChange} />
        {loading && <Loader />}
        {error && (
          <h4>
            Sorry. Something went wrong. Try refreshing the page or come back
            later....{" "}
          </h4>
        )}
        {jobs.length === 0 && !loading && (
          <>
            {" "}
            <h3>No jobs in matching criteria...</h3>
            <ContactForm />
          </>
        )}
        {jobs.map((item) => {
          return <Job key={item.id} job={item} />;
        })}
        {loading !== true && jobs.length > 0 && (
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          ></JobsPagination>
        )}
      </Container>
    </>
  );
}
