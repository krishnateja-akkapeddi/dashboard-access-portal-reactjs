import React from "react";

type ListHandlerProps = {
  loading: boolean;
  list: any[] | undefined;
  children?: React.ReactNode;
};

const ListHandler: React.FC<ListHandlerProps> = ({
  loading,
  list,
  children,
}) => {
  if (loading) {
    return <div>Preparing...</div>;
  }

  if (list && list.length == 0) {
    return <div>No records found.</div>;
  }

  return <>{children}</>;
};

export default ListHandler;
