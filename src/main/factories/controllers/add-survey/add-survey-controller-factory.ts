import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbAddASurvey } from '@/main/factories/controllers/usecases/survey/db-add-survey-factory'
import { makeAddSurveyValidation } from './add-survey-validation-factory'

export const makeAddSurveyController = (): Controller => {
  return makeLogControllerDecorator(
    new AddSurveyController(makeAddSurveyValidation(), makeDbAddASurvey())
  )
}
