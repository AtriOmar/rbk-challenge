import React, { useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import LinkCard from "./LinkCard";
import { useAppContext } from "../../contexts/AppProvider";

const SimpleScroller = () => {
  const { links, setLinks } = useAppContext();

  const handleDrop = (e) => {
    setLinks(applyDrag(links, e));
  };

  return (
    <div>
      <div className="mt-2 simple-page-scroller">
        <Container onDrop={handleDrop}>
          {links.map((p, index) => (
            <Draggable key={p.id}>
              <div className="draggable-item my-2">{<LinkCard link={p} order={index} />}</div>
            </Draggable>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default SimpleScroller;

const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};
