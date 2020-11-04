// As suggested in the docs, this is the rSchedule
// setup file. Rather than importing from the
// rSchedule module directly, you import from this
// file. For more information see:
// https://gitlab.com/john.carroll.p/rschedule/-/tree/v1/docs#setup

export * from '@rschedule/standard-date-adapter'
export * from '@rschedule/core'
export * from '@rschedule/ical-tools'
export * from '@rschedule/json-tools'

export * from '@rschedule/core/generators'
import '@rschedule/standard-date-adapter/setup'
import '@rschedule/moment-date-adapter/setup'

