import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import io from "socket.io-client";

import InterviewRoom from "../AiInterview/InterviewRoom";
import InterviewPermissionCheck from "./InterviewPermissionCheck";

import {
  getInterviewById,
  getInterviewSession,
  startInterview,
} from "../../services/operations/aiInterviewApi";

const InterviewWrapper = () => {
  const { interviewId } = useParams();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const [permissionsGranted, setPermissionsGranted] = useState(false);

  if (!permissionsGranted) {
    return (
      <InterviewPermissionCheck
        onPermissionsGranted={() => setPermissionsGranted(true)}
      />
    );
  }

  return (
    <div className="relative">
      <InterviewRoom />
    </div>
  );
};

export default InterviewWrapper;
