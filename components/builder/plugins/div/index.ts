import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.NtvbDiv, {
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains(ComponentClasses.NtvbDiv);
    },
    model: {
      defaults: {
        classes: [ComponentClasses.NtvbDiv],
        tagName: 'div',
        style: {
          display: 'flex',
          padding: '20px'
        }
      }
    }
  });

  BlockManager.add(BlockIdentifies.Div, {
    category: 'Basic',
    label: 'Div',
    media: `
    <svg viewBox="0 0 24 24">
      <path 
        fill="currentColor" 
        d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z">
      </path>
    </svg>`,
    content: {
      type: ComponentTypes.NtvbDiv
    },
    select: true
  });
};

export default plugin;
