import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import { htmlSection } from './objects/htmlSection'
import home from './home/home'
import banner from './banner/banner'
import about from './about/about'
import { project } from './documents/project'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  project,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  htmlSection,
  link,
  home,  
  banner,
  about
]
