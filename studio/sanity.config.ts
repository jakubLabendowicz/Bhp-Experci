import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export const projectId = 'ndw3243l';
export const dataset = 'production';

export default defineConfig({
  name: 'szkolenia-bhp',
  title: 'Szkolenia BHP',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
