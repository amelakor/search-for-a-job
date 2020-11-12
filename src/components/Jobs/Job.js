import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import defaultImg from "../../assets/images/logo.png";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2 word-break-badge">
              {job.title}
            </Badge>
            <Badge variant="secondary" className="mr-2 word-break-badge">
              {job.location}
            </Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            src={job.company_logo || defaultImg}
            alt={job.company}
          />
        </div>

        <Button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          variant="primary"
        >
          {open ? "Hide Details" : "View Details"}
        </Button>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description}></ReactMarkdown>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
