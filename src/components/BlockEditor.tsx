import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Block {
  id: number;
  block_type: 'Text' | 'Image' | 'Video';
  content: string;
  order: number;
}

interface BlockProps {
  block: Block;
  updateBlock: (id: number, newContent: string) => void;
}


const SortableBlock = ({ block, updateBlock }: BlockProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-white rounded shadow p-4 my-2"
      style={style}
    >
    <div className="mt-2">
      <label className="block text-sm font-medium mb-1">Content</label>
      {block.block_type === 'Text' && (
        <textarea
          className="w-full border rounded p-2"
          value={block.content}
          onChange={(e) => updateBlock(block.id, e.target.value)}
        />
      )}
      {block.block_type === 'Image' && (
        <input
          type="text"
          className="w-full border rounded p-2"
          value={block.content}
          onChange={(e) => updateBlock(block.id, e.target.value)}
        />

      )}
      {block.block_type === 'Video' && (
        <input
          type="text"
          className="w-full border rounded p-2"
          value={block.content}
          onChange={(e) => updateBlock(block.id, e.target.value)}
        />
      )}
    </div>

    </div>
  );
};

const BlockEditor = ({ projectId }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/project-blocks/?project=${projectId}`)
      .then(res => setBlocks(res.data))
      .catch(err => console.error('Error fetching blocks:', err));
  }, [projectId]);

    const updateBlock = (blockId: number, newContent: string) => {
      setBlocks(prev =>
        prev.map(block =>
          block.id === blockId ? { ...block, content: newContent } : block
        )
      );
    };


  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = blocks.findIndex(b => b.id === active.id);
      const newIndex = blocks.findIndex(b => b.id === over.id);
      const newOrder = arrayMove(blocks, oldIndex, newIndex);
      setBlocks(newOrder);

      // Opcional: enviar cambios al backend
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Blocks</h2>


      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

        <SortableContext items={blocks.map(b => b.id)} strategy={verticalListSortingStrategy}>

          {blocks.map(block => (
            <SortableBlock key={block.id} block={block} updateBlock={updateBlock} />


          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default BlockEditor;
