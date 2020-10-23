import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result/save-survey-result/save-survey-result'
import { makeDbLoadSurveyById } from '../usecases/survey/db-load-survey-by-id-factory'
import { makeDbSaveSurveyResult } from '../usecases/survey-result/save-survey-result/db-save-survey-result-factory'

export const makeSaveSurveyResultController = (): Controller => {
  return makeLogControllerDecorator(
    new SaveSurveyResultController(makeDbLoadSurveyById(), makeDbSaveSurveyResult())
  )
}
